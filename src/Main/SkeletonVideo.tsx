import SkeletonElement from "./SkeletonElement";
import './Skeleton.scss'

export default function SkeletonVideo() {





    return (
        <div className="skeleton-wrapper">
            <SkeletonElement type="video"/>
            <div className="skeleton-profile">
                    <SkeletonElement type="avatar"/>
                <div>
                    <SkeletonElement type="title"/>
                    <SkeletonElement type="name"/>
                    <SkeletonElement type="etc"/>
                </div>
                <div></div>
            </div>
      </div>
    )
}