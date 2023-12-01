const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "admin-marius",
				mongodb_password: "5dF84s5WSSfghSo7",
				mongodb_clustername: "cluster0",
				mongodb_database: "my-site",
			},
		};
	}

	return {
		env: {
			mongodb_username: "admin-marius",
			mongodb_password: "5dF84s5WSSfghSo7",
			mongodb_clustername: "cluster0",
			mongodb_database: "my-site",
		},
	};
};
