import { useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useFormContext } from 'react-hook-form'
import { Spinner } from '@heroui/react'
import { useCategoryQueries } from '@/_apis/queries/category'
import type { NewPlaceRequest } from '@/_apis/schemas/place'
import type { Category as CategoryType } from '@/_apis/schemas/category'
import { CategoryBox } from './CategoryBox'
import { ChoiceCategoryBox } from './ChoiceCategoryBox'
import { Title } from '../../Title'
import { Button } from '@repo/ui/components/Button'
import { Column } from '@repo/ui/components/Layout'
import { Text } from '@repo/ui/components/Text'

type Props = {
  isLoading: boolean
}

export const Category = ({ isLoading }: Props) => {
  const { getValues, setValue } = useFormContext<NewPlaceRequest>()
  const { data: categories } = useSuspenseQuery(useCategoryQueries.list())
  const initialValues = getValues().categoryIds
  const initialCategory = initialValues
    .map((id) => categories.find((category) => category.id === id))
    .filter((category): category is CategoryType => category !== undefined)
  const [choiceCategories, setChoiceCategories] =
    useState<CategoryType[]>(initialCategory)

  const addCategory = (category: CategoryType) => {
    const currentIds = getValues().categoryIds || []

    if (choiceCategories.length >= 5 || currentIds.includes(category.id)) {
      // Todo: Toast 처리
      return
    }
    const updated = [...choiceCategories, category]
    setChoiceCategories(updated)
    setValue(
      'categoryIds',
      updated.map((c) => c.id),
    )
  }

  const removeCategory = (category: CategoryType) => {
    const updated = choiceCategories.filter((c) => c.id !== category.id)
    setChoiceCategories(updated)
    setValue(
      'categoryIds',
      updated.map((c) => c.id),
    )
  }

  const includeInCategories = (category: CategoryType) => {
    return choiceCategories.some((c) => c.id === category.id)
  }

  return (
    <>
      {isLoading && (
        <Spinner
          size={'lg'}
          className={
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
          }
        />
      )}
      <Title
        title={'내가 알리고 싶은 맛집의 종류는?'}
        description={'어울리는 카테고리를 모두 골라주세요!'}
      />
      <Column className={'mb-5 gap-2'}>
        <ChoiceCategoryBox
          choiceCategories={choiceCategories}
          removeCategory={removeCategory}
        />
        <Text variant={'body3'} className={'ml-auto text-gray-300'}>
          첫 번째 카테고리가 대표 카테고리로 선택돼요!
        </Text>
      </Column>
      <CategoryBox
        categories={categories}
        addCategory={addCategory}
        removeCategory={removeCategory}
        includeInCategories={includeInCategories}
      />
      <Button
        type='submit'
        size={'medium'}
        className={'ui:min-w-full mt-auto'}
        disabled={isLoading}
      >
        등록하기
      </Button>
    </>
  )
}
