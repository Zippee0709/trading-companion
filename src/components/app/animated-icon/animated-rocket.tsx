"use client"

import React, { use, useEffect, useRef, useState } from "react"
import { motion, useAnimationControls, useInView } from "framer-motion"

const AnimatedRocket = () => {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimationControls()
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (!isClicked) setIsClicked(true)
  }

  const handleAnimationComplete = () => {
    if (isClicked) {
      setIsClicked(false)
      controls.set({
        x: 200,
        y: 200,
        opacity: 0,
      })
    }
  }

  useEffect(() => {
    if (isClicked) {
      controls.start((i) => ({
        x: -200,
        y: -200,
        opacity: [1, 0],
        transition: { duration: 1 },
      }))
    } else {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1 },
      })
    }
  }, [isClicked, controls])

  useEffect(() => {
    if (isInView) {
      controls.set({
        x: 200,
        y: 200,
        opacity: 0,
      })
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1 },
      })
    }
  }, [isInView, controls])

  return (
    <motion.svg
      ref={ref}
      width="311"
      height="287"
      viewBox="0 0 311 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 200, y: 200, opacity: 0 }}
      animate={controls}
      onClick={handleClick}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.g id="Rocket">
        <motion.g
          id="engine"
          animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <path
            id="Vector"
            d="M226.947 209.323C218.491 218.452 201.294 236.14 172.642 232.597C161.534 230.98 150.845 227.221 141.17 221.529L139.386 220.546C108.354 202.444 64.6774 142.398 34.706 92.825C31.8787 88.1702 29.1892 83.6189 26.6377 79.171C26.6377 79.171 26.4567 78.8607 26.3533 78.7056C13.1131 55.6904 3.75183 36.4249 1.42445 26.9861C-3.3596 8.00506 5.32927 2.21247 12.4924 0.557451C16.2888 -0.293169 20.2388 -0.168621 23.9741 0.919486C44.6324 6.68622 64.7291 14.3025 84.0205 23.6761C84.2461 23.7674 84.4625 23.88 84.6669 24.0122C150.558 56.0524 197.596 101.902 223.43 123.624C224.129 124.245 224.853 124.839 225.525 125.382L225.887 125.693C258.108 152.923 238.248 197.143 226.947 209.323Z"
            fill="url(#paint0_linear_893_3234)"
          />
          <path
            id="Vector_2"
            opacity="0.15"
            d="M225.886 125.772L206.362 119.798C171.5 81.2297 130.33 48.8743 84.6143 24.1172C150.557 56.054 197.595 101.903 223.429 123.625C224.128 124.246 224.852 124.841 225.524 125.384L225.886 125.772Z"
            fill="#43675E"
          />
          <path
            id="Vector_3"
            opacity="0.15"
            d="M172.667 232.701C161.559 231.084 150.871 227.325 141.196 221.633L139.412 220.65C108.38 202.548 64.7029 142.502 34.7314 92.9287C37.5243 96.4715 127.982 209.737 162.711 225.925C166.396 227.593 169.764 229.885 172.667 232.701Z"
            fill="#43675E"
          />
          <path
            id="Vector_4"
            d="M226.948 209.324C215.725 221.401 189.219 248.527 141.197 221.633C127.621 202.109 131.422 170.897 151.774 146.821C172.126 122.746 201.942 113.85 223.431 123.703C224.129 124.323 224.854 124.918 225.526 125.461C258.264 152.588 238.301 197.092 226.948 209.324Z"
            fill="#354E4C"
          />
          <path
            id="Vector_5"
            d="M222.624 206.666C242.08 183.635 243.418 152.771 225.613 137.73C207.807 122.688 177.601 129.166 158.145 152.197C138.689 175.228 137.351 206.092 155.156 221.133C172.962 236.174 203.168 229.697 222.624 206.666Z"
            fill="#1B232A"
          />
          <path
            id="Vector_6"
            d="M113.605 248.735C112.053 247.391 50.8431 193.215 88.3915 150.003L118.958 182.664L125.552 189.723C125.552 189.723 104.192 210.644 113.605 248.735Z"
            fill="#6EC5A2"
          />
          <path
            id="Vector_7"
            d="M253.736 101.05C215.308 93.0852 195.189 115.221 195.189 115.221L188.13 109.144L154.072 79.664C195.81 40.4606 252.339 99.576 253.71 101.05H253.736Z"
            fill="#6EC5A2"
          />
          <path
            id="Vector_8"
            d="M89.6852 108.521C104.424 108.521 116.372 96.5727 116.372 81.8337C116.372 67.0947 104.424 55.1465 89.6852 55.1465C74.9463 55.1465 62.998 67.0947 62.998 81.8337C62.998 96.5727 74.9463 108.521 89.6852 108.521Z"
            fill="white"
          />
          <path
            id="Vector_9"
            d="M89.6827 100.687C100.094 100.687 108.535 92.2467 108.535 81.8351C108.535 71.4236 100.094 62.9834 89.6827 62.9834C79.2712 62.9834 70.8311 71.4236 70.8311 81.8351C70.8311 92.2467 79.2712 100.687 89.6827 100.687Z"
            fill="#1B232A"
          />
          <path
            id="Vector_10"
            d="M84.6162 24.1162C44.0164 31.8741 30.6469 58.4321 26.5869 79.1974C26.5869 79.1974 26.4059 78.8871 26.3025 78.7319C13.0623 55.7168 3.70105 36.4513 1.37367 27.0125C-3.41038 8.03143 5.27849 2.23884 12.4416 0.583819C16.2381 -0.266802 20.1881 -0.142254 23.9234 0.945853C44.5816 6.71259 64.6783 14.3289 83.9697 23.7024L84.6162 24.1162Z"
            fill="#6EC5A2"
          />
          <path
            id="Vector_11"
            d="M113.603 248.734C113.008 247.648 95.5009 214.987 118.956 182.662L125.55 189.722C125.55 189.722 104.19 210.642 113.603 248.734Z"
            fill="url(#paint1_linear_893_3234)"
          />
          <path
            id="Vector_12"
            d="M253.736 101.051C215.308 93.086 195.19 115.222 195.19 115.222L188.13 109.145C188.13 109.145 218.644 86.5693 253.71 101.025L253.736 101.051Z"
            fill="url(#paint2_linear_893_3234)"
          />
        </motion.g>
        <motion.g
          id="fire-light"
          animate={{ rotate: 5 }}
          transition={{ duration: 0.1, repeat: Infinity }}
        >
          <path
            id="FireDark_3"
            d="M241.61 167.148C233.046 160.192 222.129 156.807 211.132 157.699C200.135 158.59 189.906 163.689 182.574 171.934C175.243 180.179 171.374 190.934 171.773 201.96C172.173 212.985 176.81 223.432 184.718 231.125C184.718 231.125 217.716 267.871 310.94 286.258C310.94 286.258 306.957 244.055 248.876 175.371C246.812 172.334 244.37 169.57 241.61 167.148Z"
            fill="url(#paint5_linear_893_3234)"
          />
          <path
            id="FireWhite_3"
            d="M225.059 176.12C222.592 173.913 219.714 172.213 216.59 171.118C213.466 170.023 210.157 169.553 206.851 169.737C203.546 169.921 200.309 170.754 197.325 172.188C194.342 173.623 191.67 175.631 189.463 178.098C187.256 180.566 185.556 183.443 184.461 186.567C183.365 189.691 182.896 193.001 183.08 196.306C183.264 199.611 184.097 202.848 185.531 205.832C186.966 208.815 188.974 211.487 191.441 213.694C191.441 213.694 210.836 235.287 265.581 246.071C265.581 246.071 263.254 221.297 229.119 180.956C227.973 179.181 226.609 177.556 225.059 176.12Z"
            fill="white"
          />
        </motion.g>
      </motion.g>
      <defs>
        <linearGradient
          id="paint0_linear_893_3234"
          x1="78859.4"
          y1="36238.4"
          x2="98610.3"
          y2="57340.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.38" stopColor="#99D0B5" />
          <stop offset="0.99" stopColor="#5F9D84" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_893_3234"
          x1="5800.45"
          y1="11804"
          x2="8809.68"
          y2="12679.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#45695E" />
          <stop offset="0.87" stopColor="#1B232A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_893_3234"
          x1="22836.7"
          y1="2660.55"
          x2="23685"
          y2="5652.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#45695E" />
          <stop offset="0.87" stopColor="#1B232A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_893_3234"
          x1="180.167"
          y1="170.82"
          x2="295.527"
          y2="270.664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5049D5" />
          <stop offset="1" stopColor="#1B232A" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_893_3234"
          x1="180.167"
          y1="170.82"
          x2="295.527"
          y2="270.664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F15151" />
          <stop offset="1" stopColor="#1B232A" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_893_3234"
          x1="180.167"
          y1="170.82"
          x2="295.527"
          y2="270.664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE7671" />
          <stop offset="1" stopColor="#1B232A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export { AnimatedRocket }
