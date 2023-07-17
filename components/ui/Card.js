import { Card } from '@aws-amplify/ui-react'
function CardUI({ background, children, props }) {
  return (
    <Card
      boxShadow={'medium'}
      backgroundColor={background || 'white'}
      {...props}
    >
      {children}
    </Card>
  )
}

export default CardUI
