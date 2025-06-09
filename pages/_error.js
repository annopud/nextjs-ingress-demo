function Error({ statusCode }) {
  console.log("Error component --> ", statusCode);
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  console.log("Error.getInitialProps res", res);
  console.log("Error.getInitialProps error", err);
  return { statusCode }
}
 
export default Error