/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { NodeKey } from 'lexical';
import type { JSX } from 'react';
export default function ExcalidrawComponent({ nodeKey, data, width, height, }: {
    data: string;
    nodeKey: NodeKey;
    width: 'inherit' | number;
    height: 'inherit' | number;
}): JSX.Element;
