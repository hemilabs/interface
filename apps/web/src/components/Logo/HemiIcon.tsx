import styled from 'styled-components'

type ContainerProps = {
  clickable?: boolean
}
type SVGProps = React.SVGProps<SVGSVGElement> & ContainerProps
const HemiMainColor = '#FF5F00'

export const HemiIcon = ({ clickable, ...props }: SVGProps) => (
  <Container clickable={clickable}>
    <svg {...props} viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M436.2 1069.8c5.5 1.1 10.8-2.6 11.7-8.1L515 681.5h49.9l67 380.2c1 5.5 6.3 9.2 11.7 8.1 238-46.3 420.2-248.8 435.3-496.4v.1c0-.2.6-10.9.7-16.1 0-.6 0-1.2.1-1.7.1-2 .1-3.9.1-5.9v-2.2c0-2.5.1-5 .1-7.4v-.1c0-262.6-187.7-481.4-436.2-529.8-5.5-1.1-10.8 2.6-11.7 8.1l-67 380.1h-49.9l-67-380.2c-1-5.5-6.3-9.2-11.7-8.1C198.3 56.4 16.2 259 1 506.6v-.1c0 .2-.6 10.9-.7 16.1 0 .6 0 1.2-.1 1.7-.1 2-.1 3.9-.1 5.9v2.2c0 2.5-.1 5-.1 7.4v.1c0 262.7 187.7 481.5 436.2 529.9z"
        fill={HemiMainColor}
      />
    </svg>
  </Container>
)

const Container = styled.div<ContainerProps>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`
