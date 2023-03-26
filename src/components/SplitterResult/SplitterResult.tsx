import { FC, memo, useState } from 'react'
import st from './SplitterResult.module.css'
//
interface SplitterResultProps {
	title: string
	splitterResult: number
}

export const SplitterResult: FC<SplitterResultProps> = memo(
	({ title, splitterResult }) => {
		return (
			<div className={st.splitter_result_wrap}>
				<div className={st.title}>
					<h3>{title}</h3>
					<span>/ person</span>
				</div>

				<h2>{splitterResult ? '$' + splitterResult : '$0.00'}</h2>
			</div>
		)
	}
)
