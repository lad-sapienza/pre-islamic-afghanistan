import React, { useContext } from "react"
import PropTypes from "prop-types"
import { RecordContext } from "./record"
import getDataFromObj from "../../services/transformers/getDataFromObj"

const Image = ({
  fieldName,
  index = 0,
  dEndPoint = null,
  preset = null,
  custom = null,
  className = null,
}) => {
  // Retrieve the current value from the RecordContext
  const value = useContext(RecordContext)

  // If the value is empty, return null (no rendering)
  if (!value) {
    return null // Use null instead of an empty fragment for better performance
  }

  // Get the relevant data based on the provided name
  const data = getDataFromObj(value, [fieldName])

  const showImage = imageData => {
    let imgPath = dEndPoint ? dEndPoint : process.env.GATSBY_DIRECTUS_ENDPOINT
    if (!imgPath) {
      return null
    }
    imgPath += `/assets/${imageData.directus_files_id.id}/${imageData.directus_files_id.filename_download}`

    if (preset) {
      imgPath += `?key=${preset}`
    } else if (custom) {
      imgPath += `?${custom}`
    }

    // Render transformed data if transformer is provided, otherwise render the data directly
    return (
      <img
        src={imgPath}
        alt={
          imageData.directus_files_id.description
            ? imageData.directus_files_id.description
            : imageData.directus_files_id.filename_download
        }
        className={className ? className : null}
      />
    )
  }

  if (index === "all") {
    return (
      <>
        {data.map((img, key) => (
          <React.Fragment key={key}>{showImage(img)}</React.Fragment>
        ))}
      </>
    )
  }
  return showImage(data[index])
}

export { Image }
