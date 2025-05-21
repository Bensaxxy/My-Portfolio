/** @format */
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div>
      <div className="container pb-20 md:pb-0 bg-gray md:h-screen py-8 flex flex-col gap-8 w-full">
        <div>
          {/* Title (unchanged as requested) */}
          <h1 className="text-center border px-10 border-zinc-300 tracking-widest font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase">
            testimonials
          </h1>
        </div>

        {/* Enhanced Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-10 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <svg
              className="absolute -left-2 -top-8 w-16 h-16 text-primary/10 opacity-80"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Testimonial Text */}
            <p className="relative z-10 text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 pl-8 border-l-2 border-primary">
              &quot;I have been so impressed with your work, you have given us a major push on the project. Thank you&quot;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col items-center">
                <p className="text-primary font-medium text-lg">Kenneth Idanwekhai</p>
                <p className="text-gray-500 text-sm mt-1 flex items-center">
                  {/* <svg className="w-3 h-3 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg> */}
                  Project Manager of Nexus
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;