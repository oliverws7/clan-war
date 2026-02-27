const axios = require('axios');
require('dotenv').config();

const crApi = axios.create({
    baseURL: process.env.CLASH_ROYALE_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.CLASH_ROYALE_API_KEY}`
    }
});

const encodeTag = (tag) => {
    return tag.startsWith('#') ? tag.replace('#', '%23') : `%23${tag}`;
};

exports.getClan = async (clanTag) => {
    try {
        const response = await crApi.get(`/clans/${encodeTag(clanTag)}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching clan from CR API:', error.response?.data || error.message);
        throw error;
    }
};

exports.getRiverRace = async (clanTag) => {
    try {
        const response = await crApi.get(`/clans/${encodeTag(clanTag)}/currentriverrace`);
        return response.data;
    } catch (error) {
        console.error('Error fetching river race from CR API:', error.response?.data || error.message);
        throw error;
    }
};

exports.getWarLog = async (clanTag) => {
    try {
        const response = await crApi.get(`/clans/${encodeTag(clanTag)}/warlog?limit=10`);
        return response.data;
    } catch (error) {
        console.error('Error fetching war log from CR API:', error.response?.data || error.message);
        throw error;
    }
};

exports.getPlayer = async (playerTag) => {
    try {
        const response = await crApi.get(`/players/${encodeTag(playerTag)}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player from CR API:', error.response?.data || error.message);
        throw error;
    }
};

module.exports = exports;

