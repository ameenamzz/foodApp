const Contact = () => {
  return (
    <div className="contact-div">
      <h1 className="font-bold text-2xl text-center p-10">Contact Us</h1>
      <div className="ml-10">
        <form>
          <input className="border-1 mr-5" type="text" placeholder="Name" />
          <input className="border-1 mr-5" type="text" placeholder="Message" />
          <button className="bg-gray-300 px-5 py-1 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
