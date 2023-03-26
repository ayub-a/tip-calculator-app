import { useEffect, useState } from 'react'
//
import { CustomBillInput } from '../CustomBillInput/CustomBillInput'
import { TipList } from '../Tip/TipList'
import { SplitterResult } from '../SplitterResult/SplitterResult'
//
import st from './SplitterForm.module.css'

export const SplitterForm = () => {
	//
	const [bill, setBill] = useState('')
	const [currentTip, setCurrentTip] = useState(5)
	const [peopleQty, setPeopleQty] = useState('')
	//
	const [splitterResult, setSplitterResult] = useState({
		tipByPerson: 0,
		totalByPerson: 0
	})

	const splitBillWithTip = () => {
		const result = (+bill / 100) * +currentTip

		console.log(Math.round(result), result)

		const tipByPerson = +(+result / +peopleQty).toFixed(2)
		const totalByPerson = +(+tipByPerson + +bill / +peopleQty).toFixed(2)

		if (tipByPerson !== Infinity && totalByPerson !== Infinity) {
			setSplitterResult({ tipByPerson, totalByPerson })
		} else {
			setSplitterResult({ tipByPerson: 0, totalByPerson: 0 })
		}
	}

	const resetForm = () => {
		setBill('')
		setCurrentTip(5)
		setPeopleQty('')
	}

	useEffect(() => {
		splitBillWithTip()
	}, [bill, currentTip, peopleQty])

	return (
		<div className={st.splitter_wrap}>
			<div className={st.splitter_dashboard}>
				<CustomBillInput
					getValue={setBill}
					value={bill}
					icon="dollar"
					label="Bill"
					placeholderX="end"
				/>
				{/*  */}
				<TipList currentTip={currentTip} setCurrentTip={setCurrentTip} />
				{/*  */}
				<CustomBillInput
					icon="user"
					label="Number of people"
					validation
					placeholderX="end"
					value={peopleQty}
					getValue={setPeopleQty}
				/>
			</div>

			<div className={st.splitter_board_info}>
				<div className={st.splitter_result_wrap}>
					<SplitterResult
						title="Tip Amount"
						splitterResult={splitterResult.tipByPerson}
					/>
					<SplitterResult
						title="Total"
						splitterResult={splitterResult.totalByPerson}
					/>
				</div>
				<button onClick={resetForm}>reset</button>
			</div>
		</div>
	)
}
