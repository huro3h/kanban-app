import { mount } from '@vue/test-utils'
import { KbnButton } from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('Kbn-buttonクラスを持つbutton要素で構成されていること', () => {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
        })
      })
    })
  })
})
