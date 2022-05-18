/* Internal dependencies */
import { ellipsis, styled } from 'Foundation'
import { Text } from 'Components/Text'
import { Stack, StackItem } from 'Components/Stack'

export const KeyContentStack = styled(Stack).attrs({
  direction: 'horizontal',
  align: 'center',
  spacing: 8,
})`
  min-width: 100px;
`

export const KeyText = styled(Text).attrs(() => ({
  forwardedAs: 'div',
}))`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  ${ellipsis(1)}
`

export const KeyIconStackItem = styled(StackItem)``

export const KeyTextStackItem = styled(StackItem)``
