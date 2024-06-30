import { Question } from '@/domain/entities/question'

export interface QuestionsRepository {
  create(question: Question): Promise<void>
  delete(question: Question): Promise<Question | null>
  findBySlug(slug: string): Promise<Question | null>
  findById(questionId: string): Promise<Question | null>
}
