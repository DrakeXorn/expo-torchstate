import ExpoModulesCore
import AVFoundation

public class TorchstateModule: Module {
  let TorchErrorDomain = "TorchError"
  let device = AVCaptureDevice.default(for: .video)
  var previousTorchState: Bool = false
  let torchStateQueue = DispatchQueue(label: "torchStateQueue")

  public func definition() -> ModuleDefinition {
    Name("Torchstate")

    Events("onChange")
      
    OnCreate {
      startTorchStateCheckingThread()
    }

    Function("isTorchOn") { () in
      guard device != nil else {
        return false
      }

      return device!.isTorchAvailable && device!.isTorchActive
    }

      AsyncFunction("setTorchState") { (shouldTurnOn: Bool, promise: Promise) in
        guard device != nil else {
          promise.reject(NSError(domain: TorchErrorDomain, code: 1))
          return
        }

        do {
          try device!.lockForConfiguration()
          if device!.hasTorch {
            device!.torchMode = shouldTurnOn ? .on : .off
          } else {
            throw NSError(domain: TorchErrorDomain, code: 2)
          }
          device!.unlockForConfiguration()
          promise.resolve()

          self.sendEvent("onChange", [
            "isOn": shouldTurnOn
          ])
        } catch {
          promise.reject(error)
        }
      }
    }

  private func startTorchStateCheckingThread() {
    torchStateQueue.async {
      while true {
        let currentTorchState = self.device?.isTorchActive ?? false

        if currentTorchState != self.previousTorchState {
          self.previousTorchState = currentTorchState
          self.sendEvent("onChange", ["isOn": currentTorchState])
        }

        sleep(1)
      }
    }
  }
}
