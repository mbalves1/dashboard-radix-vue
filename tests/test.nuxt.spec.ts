// @vitest-environment nuxt
import { it } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Overview from '../components/Overview.vue'

it('can mount some component', async () => {
  const component = await renderSuspended(Overview)
  
  console.log(component)
})