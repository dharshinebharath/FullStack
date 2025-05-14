const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Message sent!");
    };
  
    return (
      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  