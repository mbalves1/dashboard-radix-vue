// tests/HelloWorld.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Overview from '../components/Overview.vue'

describe('Overview', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Overview)
    expect(wrapper.vm).toBeTruthy()
  })
})