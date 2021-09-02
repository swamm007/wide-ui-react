import { FC, ReactNode } from 'react';
import classnames from 'classnames';
export type alertType = "success" | "info" | "warning" | "error";
export interface IAlert {
    type: alertType, // 类型
    showIcon: boolean, // 是否展示左侧icon
    icon: ReactNode, // 左侧icon
    closable: boolean, // 是否显示关闭按钮 默认为true
    closeNode: ReactNode, // 自定义关闭按钮
    title: string, // 提示框的标题
    description: string, // 提示框的详细信息
    onClose: (e: React.MouseEvent<HTMLDivElement>) => void, // 点击关闭时的回调函数
    afterCLose: () => void // 关闭动画结束后的回调函数
};

const Alert: FC<Partial<IAlert>> = (props) => {
    const { type, showIcon, closable, closeNode, title, description, onClose, afterCLose } = props

    const alertClassName = classnames('wide-alert', {
        [`wide-alert-${type}`]: type,
        'wide-alert-title': title,
        'wide-alert-description': description
    })

    const iconNode = (
        <span className="wide-alert-icon-wrapper">
            {/* 后边会替换成icon图标 */}
            warn
        </span>
    )

    const descriptionNode = (
        <div className="wide-alert-content-describe">
            {description}
        </div>
    )

    const titleNode = (
        <div className="wide-alert-content-title">
            {title}
        </div>
    )

    const closeElement = () => {
        if (closable && closeNode) return <div className="wide-alert-close">{closeNode}</div>
        if (closable) return <div className="wide-alert-close" onClick={(e) => {onClose?.(e)}}>x</div>
    }

    return (
        <div className={alertClassName}>
            
            {showIcon && iconNode}

            <div className="wide-alert-content">
                {title && titleNode}
                {description && descriptionNode}
            </div>

            {closeElement()}
        </div>
    )
}
Alert.defaultProps = {
    type: 'success',
    showIcon: true,
    closable: true
}
export default Alert