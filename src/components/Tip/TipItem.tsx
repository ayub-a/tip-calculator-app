import { FC, memo } from 'react'
import st from './Tip.module.css'
//
interface TipItemProps {
	tip: number
	currentTip: number
	setCurrentTip: (tip: number) => void
}

export const TipItem: FC<TipItemProps> = memo(
	({ tip, currentTip, setCurrentTip }) => {
		return (
			<li
				className={`${st.tip_item} ${currentTip === tip ? st.currentTip : ''}`}
				onClick={() => setCurrentTip(tip)}
			>
				{tip}%
			</li>
		)
	}
)
