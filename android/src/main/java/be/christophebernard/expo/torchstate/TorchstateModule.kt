package be.christophebernard.expo.torchstate

import android.hardware.camera2.CameraCharacteristics
import android.hardware.camera2.CameraManager
import android.hardware.camera2.CameraManager.TorchCallback
import android.os.Bundle
import android.util.Log
import androidx.core.content.ContextCompat.getSystemService
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.util.concurrent.Executor

class TorchstateModule : Module() {
  private var cameraManager: CameraManager? = null
  private var torchState: Boolean = false
  private var torchStateCheckingThread: Thread? = null

  override fun definition() = ModuleDefinition {
    Name("Torchstate")

    Events("onChange")

    OnCreate {
      cameraManager = getSystemService(appContext.reactContext!!, CameraManager::class.java)!!
      startTorchStateCheckingThread()
    }

    OnDestroy { torchStateCheckingThread?.interrupt() }

    Function("isTorchOn") {
      return@Function torchState
    }

    AsyncFunction("setTorchState") { shouldBeOn: Boolean, promise: Promise ->
      try {
        val cameraId = cameraManager?.cameraIdList?.get(0)

        if (cameraId == null) {
          promise.reject(CodedException("Camera not found"))
          return@AsyncFunction
        }

        cameraManager?.setTorchMode(cameraId, shouldBeOn)

        promise.resolve(null)
      } catch (e: Exception) {
        promise.reject(CodedException(e))
      }
    }
  }

  private fun startTorchStateCheckingThread() {
    cameraManager?.registerTorchCallback(object: TorchCallback() {
      override fun onTorchModeChanged(cameraId: String, enabled: Boolean) {
        Log.d("TorchstateModule", "Torch state changed: $enabled")
        torchState = enabled

        val eventPayload = Bundle().apply {
          putBoolean("isOn", enabled)
        }

        sendEvent(
          "onChange",
            eventPayload
        )
      }
    }, null)
  }
}