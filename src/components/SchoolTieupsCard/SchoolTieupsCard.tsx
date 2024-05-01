import { colors } from "node_modules/react-select/dist/declarations/src/theme";
import img1 from '../../../public/1 (2).jpg'
import img2 from '../../../public/2 (2).jpg'
import img3 from '../../../public/3 (2).jpg'
import img4 from '../../../public/7 (1).jpg'


export default function SchoolTieupsCard() {
  return (
    <>
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 mt-10 " style={{ color: '#0865AD' }}>
          <span className="text-6xl"> Protect </span> Your Student's Well-being
        </h2>

        <div className="p-8 m-10 sm:p-8">
          <div className="columns-1 gap-1 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src={img1} style={{ height: "350px", width: '300px' }} />
            <img src={img2} style={{ height: "350px", width: '300px' }} />
            <img src={img3} style={{ height: "350px", width: '300px' }} />
            <img src={img4} style={{ height: "350px", width: '300px' }} />
          </div>

        </div>
      </div>



    </>
  )
}
