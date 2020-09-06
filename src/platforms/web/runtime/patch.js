/* @flow */

import * as nodeOps from 'web/runtime/node-ops'//操作外部dom的方法
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)//操作属性的方法

export const patch: Function = createPatchFunction({ nodeOps, modules })
