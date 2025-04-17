export function ImmediateInvoke() {
  return (
    <>
      <div>
        {(() => (
          <h1>Hello Bob</h1>
        ))()}
      </div>
      
    </>
  );
}
// export default ImmediateInvoke;
