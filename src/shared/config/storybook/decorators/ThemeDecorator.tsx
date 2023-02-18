import 'app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { type ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'

export const ThemeDecorator = (theme: ThemeType) => (Story: StoryFn) => {
    return (
        <div style={ { paddingTop: '20px' } }
            className={ `app ${theme}` }>
            <Story/>
        </div>
    )
}
