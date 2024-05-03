import * as React from 'react';

import { TorchstateViewProps } from './Torchstate.types';

export default function TorchstateView(props: TorchstateViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
