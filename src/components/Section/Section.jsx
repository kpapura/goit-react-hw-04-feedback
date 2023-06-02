export const Section = ({ title, children }) => (
  <div
    style={{
      width: '280px',
      padding: '10px',
      border: '1px solid black',
      marginBottom: '10px',
      borderRadius: '20px',
      background:
        'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)',
    }}
  >
    <h2
      style={{
        marginTop: '0',
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);
