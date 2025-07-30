import Image from 'next/image'

export default function Headshot() {
    return (
        <Image 
            src="/headshot_rect_smokeblue.png"
            width={240}
            height={280}
            alt="Picture of Sourav"
        />
    )
}