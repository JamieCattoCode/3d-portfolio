import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// 9K_YV2tDy187gu5fb  public key
// template_jaadhod   template id
// service_cyoanvr    service id

const PUBLIC_KEY = '9K_YV2tDy187gu5fb';
const TEMPLATE_ID = 'template_jaadhod';
const SERVICE_ID = 'service_cyoanvr';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: 'Jamie',
        from_email: form.email,
        to_email: 'jamie@jmtcodes.com',
        message: form.message
      },
      PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you soon.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (err) => {
      setLoading(false);

      console.log(err);

      alert('Something went wrong, please try again.')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-column-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"  
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john.doe@gmail.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, 'contact');

export default WrappedContact;