package com.expediagroup.graphql.generated.inputs

import com.expediagroup.graphql.client.Generated
import kotlin.Float
import kotlin.String
import kotlinx.serialization.Serializable

/**
 * Test input object
 */
@Generated
@Serializable
public data class SimpleArgumentInput(
  /**
   * Maximum value for test criteria
   */
  public val max: Float? = null,
  /**
   * Minimum value for test criteria
   */
  public val min: Float? = null,
  /**
   * New value to be set
   */
  public val newName: String? = null
)
