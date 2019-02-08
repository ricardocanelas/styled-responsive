import React from 'react'
import styled from 'styled-components'

class Responsible {
  constructor() {
        this.breakpointValues = this.setBreakpoints({
            xs: { min: '0em', width: '100%' },
            sm: { min: '48em', width: '49rem' },
            md: { min: '64em', width: '65rem' },
            lg: { min: '75em', width: '76rem' },
        })
    }

    setBreakpoints(breakpointValues) {
        Object.keys(breakpointValues).forEach(key => {
            return (breakpointValues[key] = { ...breakpointValues[key], id: key })
        })
        return (this.breakpointValues = breakpointValues)
    }

    map(func, breakpoints) {
        let out = ''
        breakpoints = breakpoints || this.breakpointValues

        Object.keys(breakpoints).forEach(key => {
            const elem = breakpoints[key]
            out += `@media only screen and (min-width: ${elem['min']}) {
                ${func(elem)}
            }
            `
        })
        return out
    }

    withResposive(comp) {
        return styled(comp)`
            ${props =>
                Responsive.map(breakpoint => {
                    if (props[breakpoint.id] !== undefined) {
                        return `
                        width: ${Responsive.getWidth(props[breakpoint.id])};
                    `
                    }
                    return ''
                })}
        `
    }

    withResponiveSimple(comp) {
        return styled(comp)`
            ${props =>
                this.map(breakpoint => {
                    return `max-width: ${breakpoint['width']};`
                }, props.brekpoints)}
        `
    }

    getWidth(value) {
        if (typeof value === 'number') {
            if (value >= 0 && value <= 1) return (value * 100).toFixed(2) + '%'
            else return value + 'px'
        }

        const n = parseInt(value)

        if (n >= 1 && n <= 12) return 100 / (12 / value) + '%'

        return value
    }

    anyToPixel (value) {
        if (typeof value === 'string' && value.indexOf('em') !== -1) value = parseFloat(value, 10) * 16
        else value = parseFloat(value, 10)

        return value
    }

    check(width, points) {
        const visibles = []
        const p = Object.keys(points).reduce((acc, key) => {
            acc[key] = { ...points[key] }
            return acc
        }, {})

        Object.keys(p).forEach(key => {
            p[key].isVisible = false
            var min = this.anyToPixel(p[key].min)
            if (min < width) {
                visibles.push(p[key].id)
                p[key].isVisible = true
            }
        })
        return { current: visibles.length > 0 ? visibles[visibles.length - 1] : null, visibles, breakpoints: p }
    }
}

export const Responsive = new Responsible()
export const withResposiveSimple = Responsive.withResposiveSimple
export const withResposive = Responsive.withResposive

const StyledContainer = Responsive.withResponiveSimple(styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    border: 1px solid #f5f5f5;
`)

export default class Container extends React.PureComponent {
    state = {
        data: { current: null, visibles: [], breakpoints: {} },
    }

    componentDidMount() {
        if (this.props.children.constructor === Function) {
            const points = Responsive.check(window.innerWidth, Responsive.breakpointValues)
            this.setState({ data: points })
            window.addEventListener('resize', this.updateDimensions)
        }
    }

    componentWillUnmount() {
        if (this.props.children.constructor === Function) {
            window.removeEventListener('resize', this.updateDimensions)
        }
    }

    updateDimensions = () => {
        const points = Responsive.check(window.innerWidth, Responsive.breakpointValues)
        this.setState({ data: points })
    }

    render() {
        const brekpoints = Responsive.breakpointValues
        return (
            <StyledContainer {...this.props} brekpoints={brekpoints}>
                {this.props.children.constructor === Function
                    ? this.props.children(this.state.data)
                    : this.props.children}
            </StyledContainer>
        )
    }
}
