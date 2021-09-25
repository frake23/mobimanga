export interface PathProps {
    color: string
}

export interface PathPropsWithFill extends PathProps  {
    type: 'outlined' | 'filled',
}

export interface PathPropsWithNumber extends PathProps {
    type: 1 | 2
}

export interface PathPropsWithSwitch extends PathProps {
    type: 'off' | 'on'
}
