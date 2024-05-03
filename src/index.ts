import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Torchstate.web.ts
// and on native platforms to Torchstate.ts
import TorchstateModule from './TorchstateModule';
import TorchstateView from './TorchstateView';
import { ChangeEventPayload, TorchstateViewProps } from './Torchstate.types';

// Get the native constant value.
export const PI = TorchstateModule.PI;

export function hello(): string {
  return TorchstateModule.hello();
}

export async function setValueAsync(value: string) {
  return await TorchstateModule.setValueAsync(value);
}

const emitter = new EventEmitter(TorchstateModule ?? NativeModulesProxy.Torchstate);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TorchstateView, TorchstateViewProps, ChangeEventPayload };
