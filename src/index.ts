import TorchstateModule from './TorchstateModule';
import {ChangeEventPayload} from "./Torchstate.types";
import {EventEmitter, NativeModulesProxy, Subscription} from "expo-modules-core";
import {useEffect, useState} from "react";

const emitter = new EventEmitter(TorchstateModule ?? NativeModulesProxy.Torchstate);

function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

type TorchstateSwitchFunction = (torchState: boolean | ((currentTorchState: boolean) => boolean)) => Promise<void>

export function useTorch(): [boolean, TorchstateSwitchFunction] {
  const [torchOn, setTorchOn] = useState(TorchstateModule.isTorchOn());

  const switchTorchState: TorchstateSwitchFunction = async (torchState) => {
    const nextTorchState = typeof torchState === 'function' ? torchState(torchOn) : torchState;
    await TorchstateModule.setTorchState(nextTorchState);
  }

  useEffect(() => {
    const subscription = addChangeListener(({isOn}) => {
      void setTorchOn(isOn);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return [torchOn, switchTorchState];
}


export { ChangeEventPayload };
