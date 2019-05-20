import React from "react";
import { List, Icon, Row, Col, Typography } from "antd";
import { connect } from "react-redux";
import Filters from "./Filters";

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

const TrackList = props => {
	return (
		<React.Fragment>
			<Row style={{ margin: "2em auto", width: "80%" }}>
				<p>
					<Typography.Text type="secondary">
						Showing {props.tracks.tracks.length} results
					</Typography.Text>
				</p>
				<Col span={6}>
					<Filters />
				</Col>
				<Col span={17} offset={1}>
					<List
						itemLayout="vertical"
						size="large"
						loading={props.tracks.loading}
						dataSource={props.tracks.tracks}
						renderItem={item => (
							<List.Item
								key={item.trackId}
								actions={[
									<IconText
										type="dollar"
										text={item.trackPrice}
									/>,
									<IconText
										type="file-zip"
										text={item.collectionPrice}
									/>,
									<IconText
										type="sound"
										text={item.primaryGenreName}
									/>
								]}
								extra={
									<img
										width={100}
										alt="logo"
										src={item.artworkUrl100}
									/>
								}
							>
								<List.Item.Meta
									// avatar={<Avatar src={item.artworkUrl30} />}
									title={
										<a
											rel="noopener noreferrer"
											target="_blank"
											href={item.trackViewUrl}
										>
											{item.trackName}
										</a>
									}
									description={
										<a
											rel="noopener noreferrer"
											target="_blank"
											href={item.artistViewUrl}
										>
											{item.artistName}
										</a>
									}
								/>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={item.collectionViewUrl}
								>
									View Collection
								</a>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</React.Fragment>
	);
};

function mapStateToProps(state) {
	return { tracks: state.tracks };
}

export default connect(mapStateToProps)(TrackList);