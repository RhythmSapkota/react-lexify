/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { ExcalidrawElement, NonDeleted } from '@excalidraw/excalidraw/element/types';
import type { AppState, BinaryFiles } from '@excalidraw/excalidraw/types';
import type { JSX } from 'react';
import * as React from 'react';
type ImageType = 'svg' | 'canvas';
type Dimension = 'inherit' | number;
type Props = {
    /**
     * Configures the export setting for SVG/Canvas
     */
    appState: AppState;
    /**
     * The css class applied to image to be rendered
     */
    className?: string;
    /**
     * The Excalidraw elements to be rendered as an image
     */
    elements: NonDeleted<ExcalidrawElement>[];
    /**
     * The Excalidraw files associated with the elements
     */
    files: BinaryFiles;
    /**
     * The height of the image to be rendered
     */
    height?: Dimension;
    /**
     * The ref object to be used to render the image
     */
    imageContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    /**
     * The type of image to be rendered
     */
    imageType?: ImageType;
    /**
     * The css class applied to the root element of this component
     */
    rootClassName?: string | null;
    /**
     * The width of the image to be rendered
     */
    width?: Dimension;
};
/**
 * @explorer-desc
 * A component for rendering Excalidraw elements as a static image
 */
export default function ExcalidrawImage({ elements, files, imageContainerRef, appState, rootClassName, width, height, }: Props): JSX.Element;
export {};
