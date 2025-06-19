declare module '*.svg' {
  import { SVGProps } from 'react'

  export const ReactComponent: React.FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >
}
declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}
