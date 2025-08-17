export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.warn(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.warn(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter Your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter Your email"
            name="email"
          />
          <textarea
            row="10"
            type="textarea"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter Your message"
            name="message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
