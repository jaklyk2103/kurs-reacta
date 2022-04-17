export default ({hasError, message, children}) => {
  return(
    hasError ? <p>{message}</p> : <>{children}</>
  )
} 