import SignUpPage from './SignUpPage.vue'

import { mount } from '@vue/test-utils'

describe('Tests to Sign Up Page', () => {
  it('has Sign up header', () => {
    const wrapper = mount(SignUpPage)
    expect(wrapper.text()).toBe("Sign Up")
  })
})