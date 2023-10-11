'use client'

import { motion } from 'framer-motion'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50, {
      message: 'Username must be less than 50 characters.',
    }),
  lastName: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50, {
      message: 'Username must be less than 50 characters.',
    }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50, {
      message: 'Username must be less than 50 characters.',
    }),
})

const resolver = zodResolver(formSchema)

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post('/api/contact', data)
      toast.loading('Odosiela sa...', {
        duration: 3000,
        position: 'bottom-right',
        style: {
          background: '#1E1741',
          color: '#fff',
        },
        className: 'bg-gradient-to-br from-[#1E1741] to-[#5E16F9] rounded-full',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite',
        },
      })
      reset()
    } catch (error) {
      console.log(error)
      toast.success('Niečo sa pokazilo! 😪', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#1E1741',
          color: '#fff',
        },
        className: 'bg-gradient-to-br from-[#1E1741] to-[#5E16F9] rounded-full',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite',
        },
      })
    } finally {
      toast.success('Správa bola úspešne odoslaná', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#1E1741',
          color: '#fff',
        },
        className: 'bg-gradient-to-br from-[#1E1741] to-[#5E16F9] rounded-full',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite',
        },
      })
    }
  })

  return (
    <section id="contact" className="my-10 ">
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center mb-10">
          <h2 className="sm:text-[48px] text-[36px] font-semibold font-sans bg-gradient-to-r from-[#6E96FF] to-[#AA6EFF] bg-clip-text text-transparent">
            Napíste nám
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Meno"
                  {...register('firstName')}
                  className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-gray-400 text-gray-200"
                />
                {errors.firstName && (
                  <span className="text-red-400 flex items-center justify-center">
                    Toto pole musí byť vyplnené!
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  {...register('lastName')}
                  placeholder="Priezvisko"
                  className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-gray-400 text-gray-200"
                />
                {errors.firstName && (
                  <span className="text-red-400 flex items-center justify-center">
                    Toto pole musí byť vyplnené!
                  </span>
                )}
              </div>
            </div>

            {/* Email field */}
            <div className="flex flex-col w-full">
              <input
                type="email"
                {...register('email')}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-gray-400 text-gray-200"
              />
              {errors.firstName && (
                <span className="text-red-400 flex items-center justify-center">
                  Toto pole musí byť vyplnené!
                </span>
              )}
            </div>
            {/* Message field */}
            <div className="flex flex-col w-full">
              <textarea
                {...register('message')}
                cols={0}
                rows={10}
                placeholder="Napíšte nám správu"
                className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-gray-400 text-gray-200"
              />
              {errors.firstName && (
                <span className="text-red-400 flex items-center justify-center">
                  Toto pole musí byť vyplnené!
                </span>
              )}
            </div>

            <div className="w-full sm:flex items-center justify-center lg:justify-end">
              <div className="bg-gradient-to-r from-[#1E1741] to-[#5E16F9] p-[1px] rounded-full">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-2 bg-gradient-to-br from-[#5E16F9] to-[#1E1741] rounded-full h-auto w-full"
                >
                  <p className="text-white font-medium">Odoslať</p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
