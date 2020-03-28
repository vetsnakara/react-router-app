import React from 'react'

const Loading = ({
  text = 'Loading',
  speed = 300
}) => {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setContent(content => (
        content === `${text}...`
          ? text
          : `${content}.`
      ))
    }, speed)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className='loader'>{content}</p>
  )
}

export default Loading
