import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TorchstateViewProps } from './Torchstate.types';

const NativeView: React.ComponentType<TorchstateViewProps> =
  requireNativeViewManager('Torchstate');

export default function TorchstateView(props: TorchstateViewProps) {
  return <NativeView {...props} />;
}
