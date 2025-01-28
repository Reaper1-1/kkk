/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import { css } from '@emotion/core';
import classNames from 'classnames';
import '@spectrum-css/typography';
import { Divider } from '@react-spectrum/divider';
import { Link } from './Link';

export const Heading2 = ({ children, className, id, ...props }) => (
  <>
    <h2
      {...props}
      className={classNames(className, 'spectrum-Heading--L')}
      css={css`
        & a {
          visibility: hidden;
        }

        &:hover a {
          visibility: visible;
        }
      `}>
      {children}
      <Link
        href={`#${id}`}
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-100);
        `}>
        #
      </Link>
    </h2>
    <Divider marginBottom="size-300" />
  </>
);
