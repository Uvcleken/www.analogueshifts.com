'use client'
import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import Image from 'next/image'
import ApplicationLogo from '@/components/application/application-logo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import LoadingTwo from '@/components/ui/loading-spinner'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { toastConfig } from '@/utils/toast-config'
import FormInput from '@/components/application/form-input'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/register'

    function submit(e) {
        e.preventDefault()
        const axios = require('axios')
        let data = JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: confirm_password,
            device_token: crypto.randomUUID(),
            device_type: 'web',
        })

        let config = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        setLoading(true)
        axios
            .request(config)
            .then(async response => {
                const userData = JSON.stringify({
                    ...response.data[0].data.user,
                    token: response.data[0].data.token,
                })

                Cookies.set('analogueshifts', userData)
                setLoading(false)
                toast.success('Account Created Successfully', toastConfig)
                let redirectionLink = Cookies.get('RedirectionLink')
                window.location.href = redirectionLink.trim().length
                    ? redirectionLink
                    : '/dashboard'
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, toastConfig)
            })
    }
    useEffect(() => {
        const auth = Cookies.get('analogueshifts')
        if (auth) {
            window.location.href = '/dashboard'
            return null
        }
    }, [])

    return (
        <>
            {' '}
            {loading && <LoadingTwo />}
            <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
                <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                    <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
                        <Image src={Group} alt="" className="absolute" />
                        <Image src={Avatar} alt="" />
                    </div>
                    <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                        <ApplicationLogo />
                        <form
                            onSubmit={submit}
                            className="pt-11 w-full flex flex-col">
                            <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                                Welcome!
                            </p>
                            <p className="font-bold text-3xl text-[#292929] pb-5">
                                Join our Community
                            </p>
                            <FormInput
                                icon="fa-solid fa-signature"
                                type="text"
                                onChange={e => setName(e.target.value)}
                                label="Name"
                                placeholder="Name"
                                value={name}
                            />
                            <FormInput
                                icon="fa-solid fa-envelope"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                label="Email"
                                placeholder="Enter Email"
                                value={email}
                            />
                            <FormInput
                                icon="fa-solid fa-lock"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                label="Password"
                                placeholder="Enter Password"
                                value={password}
                            />
                            <FormInput
                                icon="fa-solid fa-lock"
                                type="password"
                                onChange={e =>
                                    setConfirmPassword(e.target.value)
                                }
                                label="Confirm Password"
                                placeholder="Enter Password"
                                value={confirm_password}
                            />
                            <button
                                type="submit"
                                className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                                Sign Up
                            </button>
                            <div className="w-full pt-4 flex justify-center items-center gap-1">
                                <p className="font-normal text-sm text-black/90">
                                    Already have an account?
                                </p>
                                <Link
                                    href="/login"
                                    className="font-normal text-sm text-tremor-background-darkYellow">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
