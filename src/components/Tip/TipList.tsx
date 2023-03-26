import { FC, memo, useRef, useState } from 'react'
import { CustomBillInput } from '../CustomBillInput/CustomBillInput'
import st from './Tip.module.css'
//
import { TipItem } from './TipItem'
//
interface TipListProps {
	currentTip: number
	setCurrentTip: (tip: number) => void
}

export const TipList: FC<TipListProps> = memo(
	({ currentTip, setCurrentTip }) => {
		const tips = useRef([5, 10, 15, 25, 50])

		const [cstmTip, setCstmTip] = useState('')

		const getCstmTipHandler = (value: string) => {
			setCstmTip(value)

			if (+value > 4) {
				setCurrentTip(+value)
			} else {
				setCurrentTip(5)
			}
		}

		return (
			<div className={st.tips_wrap}>
				<div className={st.tips_header}>
					<span>Select tip %</span>
					<button>on | off</button>
				</div>

				<ul className={st.tip_list}>
					{tips.current.map((tip) => (
						<TipItem
							key={tip}
							tip={tip}
							currentTip={currentTip}
							setCurrentTip={setCurrentTip}
						/>
					))}

					<li className={`${st.tip_item} ${st.cstm_tip_item}`}>
						<CustomBillInput
							placeholder="Custom"
							placeholderX="center"
							value={+cstmTip !== +currentTip ? '' : cstmTip}
							minValue="5"
							getValue={getCstmTipHandler}
						/>
					</li>
				</ul>
			</div>
		)
	}
)
