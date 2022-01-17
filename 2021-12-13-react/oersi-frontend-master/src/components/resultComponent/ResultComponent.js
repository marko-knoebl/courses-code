import React, {useState} from "react"
import config from "react-global-configuration"
import {ReactiveList} from "@appbaseio/reactivesearch"
import "./ResultComponent.css"
import TileCard from "./card/Card"
import {withTranslation} from "react-i18next"
import "antd/lib/pagination/style/css"
import {Pagination} from "antd"
import {ConfigurationRunTime} from "../../helpers/use-context"
import getParams, {setParams} from "../../helpers/helpers"
import Grid from "@material-ui/core/Grid"

/**
 * Result Component
 * creates a Result box UI component that is used to show the result in base of search,
 * configuration fields are set in src/config/prod.json#resultList
 *
 * @author Edmond Kacaj <edmondikacaj@gmail.com>
 * @props Properties from Parent Component
 */
const ResultComponent = (props) => {
  const {setLoading, totalResult, setTotalResult} = props
  const context = React.useContext(ConfigurationRunTime)
  //declare varibale to get data from Configuration fle prod.json
  const [conf] = useState(config.get("resultList"))
  const [pageSize, setPageSize] = useState(getPageSize())
  const defaultQuery = function () {
    return {
      track_total_hits: context.TRACK_TOTAL_HITS ? context.TRACK_TOTAL_HITS : true,
    }
  }
  return (
    <>
      <ReactiveList
        componentId={conf.component}
        dataField={conf.dataField}
        stream={false}
        pagination={conf.pagination}
        paginationAt={conf.paginationAt}
        pages={conf.pagesShow}
        sortBy={conf.sortBy}
        size={pageSize}
        showLoader={false}
        showEndPage={conf.showEndPage}
        URLParams={conf.URLParams}
        showResultStats={conf.showResultStats}
        renderError
        react={{and: conf.and}}
        defaultQuery={defaultQuery}
        sortOptions={conf.sortByDynamic}
        renderNoResults={() => setTotalResult(0)}
        renderResultStats={(stats) => renderStatistics(stats)}
        renderPagination={({
          pages,
          totalPages,
          currentPage,
          setPage,
          fragmentName,
        }) => {
          return (
            <Pagination
              showQuickJumper
              current={currentPage + 1}
              defaultCurrent={currentPage + 1}
              total={totalResult}
              pageSizeOptions={context.RESULT_PAGE_SIZE_OPTIONS}
              showTotal={(total, range) =>
                props.t("RESULT_LIST.SHOW_TOTAL", {
                  rangeStart: range[0],
                  rangeEnd: range[1],
                  total: total,
                })
              }
              defaultPageSize={pageSize}
              onChange={(page, pageSiz) => {
                setPage(page - 1)
              }}
              onShowSizeChange={(current, size) => {
                setPageSize(size)
                window.location.search = setParams(window.location, {
                  name: "size",
                  value: size,
                })
              }}
            />
          )
        }}
      >
        {({data, error, loading}) => (
          <Grid container direction="row" alignItems="flex-start">
            {setLoading(loading)}
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <TileCard key={item._id} {...item} />
              </Grid>
            ))}
          </Grid>
        )}
      </ReactiveList>
    </>
  )
  function renderStatistics(stats) {
    setTotalResult(stats.numberOfResults)
  }
  function getPageSize() {
    const sizeParam = getParams(window.location, "size")
    if (
      sizeParam != null &&
      context.RESULT_PAGE_SIZE_OPTIONS.indexOf(sizeParam) !== -1
    ) {
      return parseInt(sizeParam)
    } else {
      return context.NR_OF_RESULT_PER_PAGE
    }
  }
}

ResultComponent.propTypes = {}

export default withTranslation()(ResultComponent)
