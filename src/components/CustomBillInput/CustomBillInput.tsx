import { FC, memo } from 'react'
import st from './CustomBillInput.module.css'
///
import { InputIcons } from './InputIcons'

interface CustomBillInputProps {
	getValue: (value: string) => void
	value: string
	minValue?: string
	icon?: 'dollar' | 'user'
	label?: string
	placeholder?: string
	placeholderX?: 'start' | 'center' | 'end'
	validation?: boolean
	disabled?: boolean
}

export const CustomBillInput: FC<CustomBillInputProps> = memo(
	({
		getValue,
		value,
		minValue,
		icon,
		label,
		placeholder = '0',
		placeholderX = 'start',
		validation = false,
		disabled = false
	}) => {
		//
		return (
			<div className={st.cstm_input}>
				{label?.trim() ? (
					<div className={st.label_wrap}>
						<span className={st.title_label}>{label}</span>
						{validation ? (
							value ? null : (
								<span className={st.zero_bill_label}>Can't be zero</span>
							)
						) : null}
					</div>
				) : null}

				<div className={`${st.cstm_input_main} `}>
					<InputIcons name={icon} />

					<input
						type="number"
						min={minValue}
						value={value}
						onChange={(e) => getValue(e.target.value)}
						placeholder={placeholder}
						className={`${validation ? (value ? '' : st.validation) : ''} ${
							st[`placeholderX_${placeholderX}`]
						}`}
						disabled={disabled}
					/>
				</div>
			</div>
		)
	}
)
