// author Kevin B�nisch
const baseURL = 'http://localhost:4567'

// Cleans requestss parameters for potential problems
function cleanParameter(s) {
    return s.replace('/', '{SLASH}'); // This can destroy the url cause of the slash
}

// Gets all metadata for homescreen
async function getHomescreenData() {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetHomescreenData",
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all speakers
async function getSpeakers(limit = '', from = '', to = '', fraction = '', party = '') {
    try {
        var param = cleanParameter(limit + ',' + from + ',' + to + ',' + fraction + ',' + party);
        const result = await $.ajax({
            url: "/api/DashboardController/GetSpeaker/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets a speaker by id
async function getSpeakerById(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetSpeakerById/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets a speaker inspector by id
async function getSpeakerInspectorView(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/GlobalSearchController/GetSpeakerInspectorView/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets the portrait of a speaker
async function getSpeakerPortrait(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetDeputyPortrait/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
    return "https://picsum.photos/536/354";
    var img = baseURL + '/speakerportait?speakerid=' + speakerId;
    return img;
}

// Gets all fractions
async function getFractions() {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetFractions",
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all parties
async function getParties() {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetParties",
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all protocols
async function getProtocols() {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetProtocols",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all polls of a protocol
async function getBundestagUrlOfPoll(pollId) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetBundestagUrlOfPoll/" + pollId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all polls of a protocol
async function getPollsOfProtocol(period, protocolNumber) {
    try {
        var param = cleanParameter(period + ',' + protocolNumber);
        const result = await $.ajax({
            url: "/api/DashboardController/GetPollsOfProtocol/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all angedaitems of an protocol
async function getAgendaItemsOfProtocol(protocolId) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetAgendaItemsOfProtocol/" + protocolId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all speeches of an agendaItem
async function getSpeechesOfAgendaItem(period, protocol, number) {
    try {
        var param = cleanParameter(period + ',' + protocol + ',' + number + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetSpeechesOfAgendaItem/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets one NLP speech by id
async function getNLPSpeechById(id) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetNLPSpeechById/" + id,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets the nlp annotations of a speech by the speechid
async function getNLPAnnotationsOfSpeech(id) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetNLPAnnotationsOfSpeech/" + id,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== Networks ===============================================
async function getCommentNetworkData() {
    // Else fetch it from api
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetCommentNetworkData",
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== Networks end ===============================================

//============================================== Bigger Charts ===============================================
async function getTopicMapChartData(year) {
    // Else fetch it from api
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetTopicMapChartData/" + year,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

async function getTopicBarRaceChartData() {
    // Else fetch it from api
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/GetTopicBarRaceChartData/",
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== Networks end ===============================================


//============================================== Tokens ===============================================
// Gets all Tokens
async function getTokens(minimum, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetTokens/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Tokens of a fraction
async function getTokensOfFraction(minimum, fraction, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + fraction + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetTokens/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Tokens of a speaker
async function getTokensOfSpeaker(minimum, speakerId, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',' + speakerId);
        const result = await $.ajax({
            url: "/api/DashboardController/GetTokens/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Tokens of a party
async function getTokensOfParty(minimum, party, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + party + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetTokens/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== Tokens End ===============================================

//============================================== POS ===============================================
// Gets all POS
async function getPOS(minimum, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetPOS/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all POS of a fraction
async function getPOSOfFraction(minimum, fraction, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + fraction + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetPOS/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all POS of a speaker
async function getPOSOfSpeaker(minimum, speakerId, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',' + speakerId);
        const result = await $.ajax({
            url: "/api/DashboardController/GetPOS/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all POS of a party
async function getPOSOfParty(minimum, party, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + party + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetPOS/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== POS End ===============================================

//============================================== Sentiment ===============================================
// Gets all Sentiments
async function getSentiment(from, to) {
    try {
        var param = cleanParameter(from + ',' + to + ',' + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetSentiments/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Sentiments of a fraction
async function getSentimentOfFraction(fraction, from, to) {
    try {
        var param = cleanParameter(from + ',' + to + ',' + fraction + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetSentiments/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Sentiments of a speaker
async function getSentimentOfSpeaker(speakerId, from, to) {
    try {
        var param = cleanParameter(from + ',' + to + ',' + ',' + ',' + speakerId);
        const result = await $.ajax({
            url: "/api/DashboardController/GetSentiments/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Sentiments of a party
async function getSentimentOfParty(party, from, to) {
    try {
        var param = cleanParameter(from + ',' + to + ',' + ',' + party + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetSentiments/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Sentiments of a party
async function getSentimentOfSpeakerNamedEntity(speakerId, namedEntity, from, to) {
    try {
        var param = cleanParameter(from + ',' + to + ',' + speakerId + ',' + namedEntity);
        const result = await $.ajax({
            url: "/api/DashboardController/GetSpeakerSentimentsAboutNamedEntity/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== Sentiments End ===============================================

//============================================== Named Entity ===============================================
// Gets all NamedEntity
async function getNamedEntity(minimum, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetNamedEntitites/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Named Entityt of a fraction
async function getNamedEntityOfFraction(minimum, fraction, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + fraction + ',' + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetNamedEntitites/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Named Entity of a speaker
async function getNamedEntityOfSpeaker(minimum, speakerId, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + ',' + speakerId);
        const result = await $.ajax({
            url: "/api/DashboardController/GetNamedEntitites/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Named Entity of a party
async function getNamedEntityOfParty(minimum, party, from, to) {
    try {
        var param = cleanParameter(minimum + ',' + from + ',' + to + ',' + ',' + party + ',');
        const result = await $.ajax({
            url: "/api/DashboardController/GetNamedEntitites/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// Gets all Named Entity of a party
async function getNamedEntitiesWithSearchString(search) {
    try {
        var param = cleanParameter(search);
        const result = await $.ajax({
            url: "/api/DashboardController/SearchNamedEntities/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

//============================================== NE End ===============================================

// ============================================== Topic analysis ======================================
// Gets all Named Entity with their sentiment value.
async function postNewTopicAnalysis(obj) {
    try {
        const result = await $.ajax({
            url: "/api/DashboardController/PostNewTopicAnalysis/",
            type: "POST",
            data: JSON.stringify(obj),
            dataType: "json",
            contentType: "application/json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
    }
}

// ============================================== Global Search ======================================
// Starts a new global search with the given obj parameters,
function postNewGlobalSearch(obj, onSuccess, onError) {
    var request = $.ajax({
        url: "/api/GlobalSearchController/GlobalSearch/",
        type: "POST",
        data: JSON.stringify(obj),
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            onSuccess(response);
        },
        error: function (response) {
            onError(response);
        },
        accepts: {
            text: "application/json"
        },
    });
    return request;
}

// Get all speeches of a speaker as SpeechViewModels
async function getSpeechViewModelListViewOfSpeaker(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/GlobalSearchController/GetSpeechViewModelListViewOfSpeaker/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Get all shouts of a speaker as SpeechCommentViewModels
async function getSpeechCommentViewModelListViewOfSpeaker(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/GlobalSearchController/GetSpeechCommentViewModelListViewOfSpeaker/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Get all polls of a speaker as PollViewModels
async function getPollViewModelListViewOfSpeaker(speakerId) {
    try {
        const result = await $.ajax({
            url: "/api/GlobalSearchController/GetPollViewModelListViewOfSpeaker/" + speakerId,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// ============================================== Download Center ======================================
// Calculates the data of a download center filter
async function postCalculateData(obj) {
    try {
        const result = await $.ajax({
            url: "/api/DownloadCenterController/CalculateData/",
            type: "POST",
            data: JSON.stringify(obj),
            dataType: "json",
            contentType: "application/json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Starts the generating of a dataset by a filter
async function postGenerateDatasetByFilter(obj) {
    try {
        const result = await $.ajax({
            url: "/api/DownloadCenterController/GenerateDatasetByFilter/",
            type: "POST",
            data: JSON.stringify(obj),
            dataType: "json",
            contentType: "application/json",
            accepts: {
                text: "application/json"
            },
        });
        return result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Starts the download of a dataset zip file
async function downloadDataZip(filename, callback) {
    try {
        $.ajax({
            type: "GET",
            url: "/api/DownloadCenterController/DownloadDataset/" + filename,
            //contentType: "application/json",
            contentType: "application/octet-stream",
            xhrFields: {
                responseType: 'blob'
            },
            //data: JSON.stringify(obj),
            success: async function (data) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'bundestag-mine-export.zip';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                callback();
            }
        });
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
// ============================================== Daily Paper ======================================

// Gets a daily paper view by period and number
async function getDailyPaper(period, number) {
    try {
        var param = period + ',' + number;
        const result = await $.ajax({
            url: "/api/DailyPaperController/GetDailyPaperOfProtocol/" + param,
            type: "GET",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result.result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Posts a subscription
async function postDailyPaperSubscription(mail) {
    try {
        const result = await $.ajax({
            url: "/api/DailyPaperController/PostSubscription/" + escapeMail(mail),
            type: "POST",
            dataType: "json",
            accepts: {
                text: "application/json"
            },
        });
        return result;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
