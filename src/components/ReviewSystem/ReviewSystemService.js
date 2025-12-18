import { apiService } from '../../service/apiService';
import { API_URLS } from '../../config/config';

const createRatting = async (data) => {
  try {
    const formData = new FormData();
    console.log("Data sent to createRatting:", data);

    // text fields → req.body
    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("ratting", data.ratting);
    formData.append("description", data.reviewText);

    // files → req.files
    data.images.forEach((file) => {
      formData.append("ratting-images", file);
    });

    console.log("Submitting FormData:", [...formData.entries()]);

    const response = await apiService.post(
      API_URLS.createRatting,
      formData,
      false
    );

    console.log("Response from createRatting:", response.data);

    return response;
  } catch (error) {
    console.error("Failed to create rating:", error);
    throw error;
  }
};

const getRattingListing = async () => {
  try {
    const products = await apiService.get(API_URLS.listingRatting, false);
    return products.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export {
  createRatting,
  getRattingListing
}