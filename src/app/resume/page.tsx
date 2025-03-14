import TxtIcon from '../../../public/svg/TXT_file.svg'
import MinimizeIcon from '../../../public/svg/Minimize.svg'
import MaximizeDisabledIcon from '../../../public/svg/Maximize_disabled.svg'
import CloseDisabledIcon from '../../../public/svg/Close_disabled.svg'
import Link from 'next/link'

export default function Resume() {
    return (
        <div className="sm:grid sm:grid-cols-[1fr_2fr_1fr] sm:grid-rows-[1fr_4fr_2fr] h-screen">
            <div className="sm:col-start-2 sm:row-start-2 sm:h-full w-full h-[96%] bg-white border-2 border-b-black border-r-black outline-3 outline-[#B5BEB2] -outline-offset-4">
                <div className="flex align-middle justify-between px-1.5 mt-0.5 text-center bg-[#000080] h-6 font-sans font-bold text-sm">
                    <div className='flex gap-1.5 pt-1'><TxtIcon /> Resume - Notepad</div>
                    <div className='flex py-1'>
                        <Link href={'/'} className='content-center px-0.25 bg-[#B5BEB2] border-1 border-[#E8E8E8] border-b-black border-r-black'><MinimizeIcon /></Link>
                        <div className='content-center pr-0.5 bg-[#B5BEB2] border-1 border-[#E8E8E8] border-b-black border-r-black'><MaximizeDisabledIcon /></div>
                        <div className='content-center pr-0.5 ml-0.5 bg-[#B5BEB2] border-1 border-[#E8E8E8] border-b-black border-r-black'><CloseDisabledIcon /></div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 pl-3 py-0.5 bg-[#B5BEB2] text-[#808080] select-none">
                    <div>File</div>
                    <div>Edit</div>
                    <div>Search</div>
                    <div>Help</div>
                </div>
                <div className="sm:h-90 h-full px-5 pt-2 mx-1 text-black overflow-auto">
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl font-bold'>Syzdykov Meirhan</h1>
                            <div className='text-lg'>Astana, syzdykovmr@gmail.com, 2005</div>
                        </div>
                        <div className='text-lg'>
                            Projects: <a target='_blank' className='hover:underline decoration-2 underline-offset-2 text-blue-700' href='https://github.com/BlackHole55?tab=repositories'>GitHub</a>
                        </div>
                    </div>
                    
                    <br/>
                    <h3 className='text-2xl font-bold'>Education</h3>
                    <hr/>
                    <p className='whitespace-pre-line'>
                        <span className='font-bold text-lg'>Astana IT University 2024-Present</span> {'\n'}
                        Software Engineer {'\n'}
                        <span className='font-bold text-lg'>Astana Polytechnic College 2021-2024</span> {'\n'}
                        Information Systems Technician
                    </p>
                    <br/>
                    <h3 className='text-2xl font-bold'>Technologies and Languages</h3>
                    <hr/>
                    <ul className='list-disc list-inside pb-2'>
                        <li>Languages: TypeScript(JavaScript), HTML/CSS, Python, PHP, Java.</li>
                        <li>Technologies: MySQL, Next.js, Vue, Laravel, Git, Docker.</li>
                        <li>Other: Relational DB, Good Learner, Creative.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}