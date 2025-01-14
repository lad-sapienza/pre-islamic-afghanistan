import React from "react"
import { Search } from "../../modules/scms"
import { withPrefix } from "gatsby"

const UiSearch = () => {
  return (
    <>
    <div style={{
      maxWidth: '800px',
      margin: 'auto'
    }}>
    <p className="small text-end">Click on the yellow button<br />to toggle the advanced search module</p>
    <Search
      source={{
        dTable: "sculptures",
        dQueryString: `limit=-1&filter=${JSON.stringify({"site": {"_nin": ["Butkara I", "Mes Aynak"]}})}`
      }}
      fieldList={{
        site: {
          label: "Site",
          values: ["Tepe Narenj", "Qol-e-Tut"],
        },
        area: "Area",
        catno: "Catalogue number",
        type: "Type",
        subject: "Subject",
      }}
      resultItemTemplate={item => {
        return (
          <div className="card my-3 shadow" key={item.id}>
            <div className="card-body">
              <h5 className="card-title">
                {item.catno} — {item.site}
              </h5>
              <div className="card-text">
                <div>
                  Type: {item.type}
                  <br />
                  Subject: {item.subject}
                  <hr />
                  <a
                    href={withPrefix(`sculpture-details/?tb=sculptures&id=${item.id}`)}
                    className="btn btn-primary"
                  >
                    View record
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
    </div>
    </>
  )
}

export default UiSearch
